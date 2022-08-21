import { Spacer, Switch, Text, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import Image from "next/image";
import React, { useState } from "react";

import imageDark from "../../public/night-mode.png";
import imageLing from "../../public/brightness.png";

export const NavBar = () => {
  const { theme, isDark } = useTheme();
  const { setTheme } = useNextTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        height: "60px",
        paddingRight: "20px",
        paddingLeft: "20px",
        backgroundColor: theme?.colors.gray800.value,
      }}
    >
      <div style={{ display: 'flex' }}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Pockemon"
        width={60}
        height={60}
      />
      <div style={{ display:'flex', marginTop:'10px' }}>
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okemon
        </Text>
      </div>
      </div>
      <div style={{ display: 'flex' }}>
      <Image
        src={isDark ? imageDark : imageLing }
        alt="Pockemon"
        width={30}
        height={20}
        />
        <Spacer style={{
            marginLeft: "10px",
        }}/>
      <Switch
        size={"md"}
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        color="primary"
      />
        <Spacer/>
      <Text color="white">
        Favoritos
        </Text>
      </div>
    </div>
  );
};
