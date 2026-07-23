"use client";
import React, { useEffect, useRef, useContext } from 'react';
import * as THREE from 'three';
import { ThemeContext } from './ThemeProvider';

const GalaxyAnimation = ({ isHeroHovered }) => {
    const mountRef = useRef(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        // Scene, Camera, Renderer Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        // Particle Geometry and Material (Galaxy Stars)
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 20000;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        const colorInner = new THREE.Color(0x8888ff);
        const colorOuter = new THREE.Color(0xff8888);

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            const radius = Math.random() * 50;
            const angle = Math.random() * Math.PI * 2;
            const spiralArm = Math.random() * Math.PI * 2;

            positions[i3] = Math.cos(angle + spiralArm) * radius;
            positions[i3 + 1] = (Math.random() - 0.5) * 8;
            positions[i3 + 2] = Math.sin(angle + spiralArm) * radius;

            const mixedColor = colorInner.clone();
            mixedColor.lerp(colorOuter, radius / 50);
            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.3,
            sizeAttenuation: true,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthWrite: false,
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Mini Rockets Setup
        const rockets = [];
        const numRockets = 5;
        const rocketSpeed = 0.5;

        const createRocket = () => {
            const rocketGroup = new THREE.Group();
            const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 8);
            const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
            const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
            body.rotation.z = Math.PI / 2;
            rocketGroup.add(body);

            const noseGeometry = new THREE.ConeGeometry(0.5, 1, 8);
            const noseMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const nose = new THREE.Mesh(noseGeometry, noseMaterial);
            nose.rotation.z = Math.PI / 2;
            nose.position.x = 2;
            rocketGroup.add(nose);

            const finMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
            const finShape = new THREE.Shape();
            finShape.moveTo(0, 0);
            finShape.lineTo(0, 1);
            finShape.lineTo(1, 0.5);
            const finGeometry = new THREE.ShapeGeometry(finShape);

            const fin1 = new THREE.Mesh(finGeometry, finMaterial);
            fin1.position.set(-1.5, -0.5, 0.5);
            fin1.rotation.y = Math.PI / 2;
            rocketGroup.add(fin1);

            const fin2 = new THREE.Mesh(finGeometry, finMaterial);
            fin2.position.set(-1.5, -0.5, -0.5);
            fin2.rotation.y = Math.PI / 2;
            rocketGroup.add(fin2);

            rocketGroup.position.set(-70 - Math.random() * 50, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40);
            scene.add(rocketGroup);
            rockets.push(rocketGroup);
        };

        for (let i = 0; i < numRockets; i++) {
            createRocket();
        }

        camera.position.z = 60;

        // Mouse interaction for camera movement
        const onMouseMove = (event) => {
            mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const onWindowResize = () => {
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', onWindowResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            const rotationSpeed = isHeroHovered ? 0.002 : 0.0005;
            particles.rotation.y += rotationSpeed * 2;
            particles.rotation.x += rotationSpeed;

            camera.position.x += (mouseX.current * 2 - camera.position.x) * 0.05;
            camera.position.y += (mouseY.current * 2 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            rockets.forEach(rocket => {
                rocket.position.x += rocketSpeed * (isHeroHovered ? 2 : 1);
                if (rocket.position.x > 70) {
                    rocket.position.x = -70 - Math.random() * 50;
                    rocket.position.y = (Math.random() - 0.5) * 40;
                    rocket.position.z = (Math.random() - 0.5) * 40;
                }
                rocket.rotation.y += 0.01;
            });

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onWindowResize);
            currentMount.removeChild(renderer.domElement);
            renderer.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            rockets.forEach(rocket => scene.remove(rocket));
        };
    }, [theme, isHeroHovered]);

    return <div ref={mountRef} className="absolute inset-0 z-0 overflow-hidden bg-black"></div>;
};

export default GalaxyAnimation;
