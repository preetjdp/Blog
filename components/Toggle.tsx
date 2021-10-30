import React from 'react';
import { styled } from '@stitches/react';
import { violet, mauve, blackA, whiteA, grayA, olive } from '@radix-ui/colors';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { useTheme } from 'next-themes';

import { useSound } from "use-sound"


const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: "black",
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px ${olive.olive10}` },
  '&[data-state="checked"]': { backgroundColor: 'black' },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

// Exports
const Switch = StyledSwitch;
const SwitchThumb = StyledThumb;

// Your app...
const Flex = styled('div', { display: 'flex' });

const Toggle = () => { 
  const { setTheme, theme } = useTheme();
  const [playSoundOn] = useSound('/assets/switch-on.mp3', {
    volume: 0.5
  });
  const [playSoundOff] = useSound('/assets/switch-off.mp3', {
    volume: 0.5
  });

  const toggle = () => {
    if(theme === 'dark') {
      playSoundOn()
    } else {
      playSoundOff()
    }
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return(
    <Flex css={{ alignItems: 'center' }}>
      <Switch onClick={() => toggle()} defaultChecked id="s1">
        <SwitchThumb />
      </Switch>
    </Flex>
)};

export default Toggle;
