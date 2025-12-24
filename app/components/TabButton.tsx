import React, { type MouseEvent } from "react";
import { motion } from "framer-motion";

type Tab = "Home" | "Projects" | "Skills" | "Experience" | "Contact";

interface TabButtonProps {
    tab: Tab;
    isActive: boolean;
    onClick: (tab: Tab, e: MouseEvent<HTMLButtonElement>) => void;
}

const TabButton = ({ tab, isActive, onClick }: TabButtonProps) => (
    <motion.button
        onClick={(e) => onClick(tab, e)}
        className={`relative px-6 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
            isActive
                ? "text-white shadow-lg bg-gray-800"
                : "text-gray-400 hover:text-white hover:bg-gray-700/50"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {isActive && (
            <motion.div
                className="absolute inset-0 rounded-xl bg-gray-700"
                layoutId="activeTab"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            />
        )}
        <span className="relative z-10">{tab}</span>
    </motion.button>
);

export default TabButton;
export type { Tab };
