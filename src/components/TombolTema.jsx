"use client";

import { useState, useEffect } from "react";

export default function TombolTema() {
    const [gelap, setGelap] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("tema") === "gelap") {
            document.documentElement.classList.add("dark");
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setGelap(true);
        }
    }, []);

    function gantiTema() {
        const sekarangGelap = document.documentElement.classList.toggle("dark");
        localStorage.setItem("tema", sekarangGelap ? "gelap" : "terang");
        setGelap(sekarangGelap);
    }

    return (
        <button
            type="button"
            onClick={gantiTema}
            className="w-32 text-center rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
        >
            {gelap ? "Mode Terang" : "Mode Gelap"}
        </button>
    );
}