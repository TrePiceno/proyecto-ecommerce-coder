"use client";
import { motion } from "framer-motion";

const LoadingUI = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <motion.div
                className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
            />
            <p className="mt-4 text-lg font-medium text-gray-600">Cargando...</p>
        </div>
    );
};

export default LoadingUI;