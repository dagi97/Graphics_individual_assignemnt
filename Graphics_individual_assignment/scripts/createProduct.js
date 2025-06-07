import * as THREE from 'three';

export function createProduct(scene) {
    const parts = {};

    // Materials
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0xff69b4, // Hot pink
        roughness: 0.2,
        metalness: 0.8
    });

    const detailMaterial = new THREE.MeshStandardMaterial({
        color: 0xff1493, // Deep pink
        roughness: 0.3,
        metalness: 0.9
    });

    const eyeMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        emissive: 0x00ffff,
        emissiveIntensity: 0.8,
        roughness: 0.1,
        metalness: 0.9
    });

    const antennaMaterial = new THREE.MeshStandardMaterial({
        color: 0xff1493,
        emissive: 0xff1493,
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.8
    });

    // Head
    const headGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const head = new THREE.Mesh(headGeometry, bodyMaterial);
    head.position.y = 1.6;
    head.name = 'Robot Head';
    head.castShadow = true;
    head.receiveShadow = true;
    scene.add(head);
    parts.head = head;

    // Antennas
    const antennaGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.4);
    const leftAntenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    leftAntenna.position.set(-0.15, 2.0, 0);
    leftAntenna.name = 'Left Antenna';
    scene.add(leftAntenna);
    parts.leftAntenna = leftAntenna;

    const rightAntenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    rightAntenna.position.set(0.15, 2.0, 0);
    rightAntenna.name = 'Right Antenna';
    scene.add(rightAntenna);
    parts.rightAntenna = rightAntenna;

    // Antenna Tips
    const tipGeometry = new THREE.SphereGeometry(0.04, 16, 16);
    const leftTip = new THREE.Mesh(tipGeometry, antennaMaterial);
    leftTip.position.set(-0.15, 2.2, 0);
    leftTip.name = 'Left Antenna Tip';
    scene.add(leftTip);
    parts.leftTip = leftTip;

    const rightTip = new THREE.Mesh(tipGeometry, antennaMaterial);
    rightTip.position.set(0.15, 2.2, 0);
    rightTip.name = 'Right Antenna Tip';
    scene.add(rightTip);
    parts.rightTip = rightTip;

    // Eyes
    const eyeGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, 1.6, 0.31);
    leftEye.name = 'Left Eye';
    scene.add(leftEye);
    parts.leftEye = leftEye;

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, 1.6, 0.31);
    rightEye.name = 'Right Eye';
    scene.add(rightEye);
    parts.rightEye = rightEye;

    // Body
    const bodyGeometry = new THREE.BoxGeometry(0.7, 0.8, 0.5);
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1.0;
    body.name = 'Robot Body';
    body.castShadow = true;
    body.receiveShadow = true;
    scene.add(body);
    parts.body = body;

    // Chest Panel
    const panelGeometry = new THREE.BoxGeometry(0.4, 0.3, 0.26);
    const chestPanel = new THREE.Mesh(panelGeometry, detailMaterial);
    chestPanel.position.set(0, 1.0, 0.26);
    chestPanel.name = 'Chest Panel';
    scene.add(chestPanel);
    parts.chestPanel = chestPanel;

    // Arms
    const armGeometry = new THREE.BoxGeometry(0.15, 0.5, 0.15);
    
    // Left Arm
    const leftArm = new THREE.Mesh(armGeometry, bodyMaterial);
    leftArm.position.set(-0.425, 1.0, 0);
    leftArm.rotation.z = Math.PI / 6;
    leftArm.name = 'Left Arm';
    leftArm.castShadow = true;
    leftArm.receiveShadow = true;
    scene.add(leftArm);
    parts.leftArm = leftArm;

    // Right Arm
    const rightArm = new THREE.Mesh(armGeometry, bodyMaterial);
    rightArm.position.set(0.425, 1.0, 0);
    rightArm.rotation.z = -Math.PI / 6;
    rightArm.name = 'Right Arm';
    rightArm.castShadow = true;
    rightArm.receiveShadow = true;
    scene.add(rightArm);
    parts.rightArm = rightArm;

    // Legs
    const legGeometry = new THREE.BoxGeometry(0.2, 0.6, 0.2);
    
    // Left Leg
    const leftLeg = new THREE.Mesh(legGeometry, bodyMaterial);
    leftLeg.position.set(-0.2, 0.5, 0);
    leftLeg.name = 'Left Leg';
    leftLeg.castShadow = true;
    leftLeg.receiveShadow = true;
    scene.add(leftLeg);
    parts.leftLeg = leftLeg;

    // Right Leg
    const rightLeg = new THREE.Mesh(legGeometry, bodyMaterial);
    rightLeg.position.set(0.2, 0.5, 0);
    rightLeg.name = 'Right Leg';
    rightLeg.castShadow = true;
    rightLeg.receiveShadow = true;
    scene.add(rightLeg);
    parts.rightLeg = rightLeg;

    return parts;
}
