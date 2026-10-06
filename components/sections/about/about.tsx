'use client';
import styles from "./about.module.css"
import FolderFloat from "@/components/widgets/folder-float/folder-float";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa6';
import TearTicket from "@/components/widgets/tear-ticket/tear-ticket";
import RotatingText from '@/components/ui/rotating-text/rotating-text';

export default function About() {

    const socialItems = [
        {
            label: 'GitHub',
            icon: <FaGithub size={18} />,
            href: 'https://github.com/Zythee3',
            value: 'github'
        },
        {
            label: 'LinkedIn',
            icon: <FaLinkedin size={18} color="#0a66c2" />,
            href: 'https://www.linkedin.com/in/matheus-guilherme-565026289/',
            value: 'linkedin'
        },
        {
            label: 'Instagram',
            icon: <FaInstagram size={18} color="#e4405f" />,
            href: 'https://www.instagram.com/matheusg_lins/',
            value: 'instagram'
        },
        {
            label: 'Email',
            icon: <FaEnvelope size={18} />,
            href: 'mailto:zmatheusguilherme2@exemplo.com',
            value: 'email'
        }
    ];

    return (
        <section id="about" className={styles.about}>

            <div className={styles.aboutContainer}>
                {/* Divisão Esquerda */}
                <div className={styles.aboutLeft}>
                    <TearTicket
                        image="https://i0.wp.com/www.latitudeinfinita.com/wp-content/uploads/2019/11/O-que-fazer-em-Xangai-33-1-e1577285984230.jpg?fit=1200%2C674&ssl=1"
                        imageAlt="Espaço de exibição"
                        stub={
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '16px' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>Check-in</h3>
                                    <p style={{ fontSize: '0.8rem', color: '#a1a1aa', marginTop: '4px' }}>
                                        Rasgue para registrar sua visita
                                    </p>
                                </div>
                                <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#71717a' }}>
                                    PASS #2026-MG
                                </span>
                            </div>
                        }
                        orientation="horizontal"
                        scrim
                        imageRadius={8}
                        width={390}
                        height={200}
                        stubSize={150}
                        radius={16}
                        holes={12}
                        holeSize={6}
                        notch={3}
                        roughness={0}
                        tearAngle={30}
                        stretch={30}
                        resistance={0.45}
                        rotate={4}
                        tilt
                        tiltMax={9}
                        tiltReach={260}
                        parallax={6}
                        perspective={1000}
                        background="#27272a"
                        color="#f5f5f5"
                        border
                        borderWidth={1}
                        recenter
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '14px 16px', width: '100%', height: '100%' }}>
                            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Matheus Guilherme</span>
                            <span style={{ fontSize: '0.8rem', color: '#a1a1aa' }}>Guest Edition</span>
                        </div>
                    </TearTicket>
                </div>

                {/* Divisão do Meio */}
                <div className={styles.aboutCenter}>
                    <h1 className={styles.nameCenter}>Construindo</h1>
                    <RotatingText
                        texts={['Ideias', 'Soluções', 'Projetos', 'Aplicações']}
                        mainClassName={styles.rotatingTextMain}
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName={styles.rotatingTextSplit}
                        elementLevelClassName={styles.rotatingTextElement}
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                        splitBy="characters"
                        auto
                        loop
                    />
                </div>

                {/* Divisão Direita */}
                <div className={styles.aboutRight}>

                    <FolderFloat
                        items={socialItems}
                        label="Redes sociais"
                        sublabel="4 notes"
                        trigger="hover"
                        closeOnSelect
                        physics
                        drift={0.5}
                        onSelect={(value, index) => console.log(value, index)}
                        folderColor="#3f3f46"
                        frontColor="#52525b"
                        paperColor="#f5f5f5"
                        itemColor="#f5f5f5"
                        itemTextColor="#18181b"
                        labelColor="#f5f5f5"
                        width={200}
                        height={148}
                        radius={14}
                        spread={180}
                        lift={26}
                        tilt={8}
                        flapAngle={34}
                        restAngle={16}
                        openDuration={520}
                        stagger={45}
                        bounce={0.3}
                    />
                </div>
            </div>
        </section>
    );


} 