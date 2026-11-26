"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
        <Button
            type="button"
            variant="outline"
            onClick={gantiTema}
            className="w-32 border-white bg-transparent text-white hover:border-aksen hover:bg-aksen hover:text-white"
        >
            {gelap ? "Mode Terang" : "Mode Gelap"}
        </Button>
    );
}