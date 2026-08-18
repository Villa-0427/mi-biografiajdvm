import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function EasterEgg() {
    // Estado para la posición y dirección del GIF
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState({ x: 1, y: 1 });
    const [speed] = useState(2); // Velocidad de movimiento
    const [size] = useState(150); // Tamaño del GIF en píxeles

    useEffect(() => {
        // Esta función se ejecuta cada 16ms (unos 60 FPS) para mover el GIF
        const interval = setInterval(() => {
            setPosition((prev) => {
                let newX = prev.x + speed * direction.x;
                let newY = prev.y + speed * direction.y;
                let newDirX = direction.x;
                let newDirY = direction.y;

                // Obtener el tamaño de la ventana
                const winWidth = window.innerWidth;
                const winHeight = window.innerHeight;

                // Lógica de rebote: Si choca contra los bordes, cambia de dirección
                if (newX >= winWidth - size) {
                    newX = winWidth - size;
                    newDirX = -1;
                } else if (newX <= 0) {
                    newX = 0;
                    newDirX = 1;
                }

                if (newY >= winHeight - size) {
                    newY = winHeight - size;
                    newDirY = -1;
                } else if (newY <= 0) {
                    newY = 0;
                    newDirY = 1;
                }

                // Actualizar la dirección en el estado
                setDirection({ x: newDirX, y: newDirY });

                return { x: newX, y: newY };
            });
        }, 16); // 60fps

        // Limpiar el intervalo cuando el usuario sale de la página
        return () => clearInterval(interval);
    }, [direction, speed, size]);

    return (
        // El fondo es la pantalla completa (y estática para que se vea el baile)
        <div className="min-h-screen w-full fixed top-0 left-0 bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden">

            {/* El video de YouTube en el centro */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-3xl z-10">
                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/K0HSD_i2DvA?si=aev75hr5BPd2UB5Q&autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* La Cucaracha voladora */ }
            <img
                src="https://media.tenor.com/H47fjXyFxDoAAAAM/roach-dance.gif"
                alt="Cucaracha bailando"
                style={{
                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: `${size}px`,
                    height: 'auto',
                    zIndex: 20 // Se pone encima del video por si acaso
                }}
            />

            {/* Botón de Volver (Fijo en la esquina inferior izquierda) */}
            <Link
                to="/"
                className="absolute bottom-5 left-5 z-30 inline-block bg-white/20 hover:bg-white/30 transition-all transform hover:scale-105 py-2 px-4 rounded-xl text-white font-semibold shadow-md"
            >
                ⬅ Volver
            </Link>

        </div>
    );
}