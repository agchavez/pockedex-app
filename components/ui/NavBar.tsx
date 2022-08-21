import { Spacer, Switch, Text, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";

import imageDark from "../../public/night-mode.png";
import imageLing from "../../public/brightness.png";
import { useRouter } from "next/router";

export const NavBar = () => {
  const { theme, isDark } = useTheme();
  const { setTheme } = useNextTheme();
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        height: "80px",
        paddingRight: "20px",
        position: "fixed",
        top: 0,
        zIndex: 1,
        paddingLeft: "20px",
        backgroundColor: theme?.colors.gray800.value,
      }}
    >
      <div style={{ display: "flex", cursor: "pointer" }}>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Pockemon"
          width={60}
          height={60}
        />
        <div style={{ display: "flex", marginTop: "10px" }} onClick={onClick}>
          <Text color="white" h1>
            P
          </Text>
          <Text color="white" h2>
            okemon
          </Text>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Image
          src={isDark ? imageDark : imageLing}
          alt="Pockemon"
          width={30}
          height={20}
        />
        <Spacer
          style={{
            marginLeft: "10px",
          }}
        />
        <Switch
          size={"md"}
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          color="primary"
        />
        <Spacer />
        <Text color="white" 
            css={{
                cursor: "pointer",
                // Cambiar el color de las letras al colocar el mouse encima
                "&:hover": {
                    color: theme?.colors.secondary.value,
                },
            }}
            onClick={() => router.push("/favorite")}
        >Favoritos</Text>
      </div>
    </div>
  );
};
