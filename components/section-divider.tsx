"use client";

import React from "react";
import { motion } from "framer-motion";

/* Framer Motion is a simple yet powerful motion library for React. 
It powers the amazing animations and interactions in Framer, the web builder for creative pros. 
Zero code, maximum speed.*/

export default function SectionDivider() {
    return (
        <motion.div
            className="bg-primary my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
        ></motion.div>
    );
}