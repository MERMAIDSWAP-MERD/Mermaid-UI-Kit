import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";
import { padding } from "styled-system";

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  priceLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      {/* <img
        src="https://rugdoc.io/assets/2021/06/rugdoc-review-badge-with-glow.png"
        alt="rugdocimage"
        style={{ width: "100%" }}
      />

      <img src="https://jagosafer.io/flags/greenflag.svg" 
      alt="jago flag" 
      
      style={{ width: "100%",paddingLeft:20,paddingRight:20 }} */}
      {/* /> */}
      <Flex>
        <SocialEntry>
          {cakePriceUsd ? (
            <PriceLink href={priceLink} target="_blank">
              <PancakeRoundIcon width="24px" mr="8px" />
              <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
            </PriceLink>
          ) : (
            <Skeleton width={80} height={24} />
          )}
        </SocialEntry>
        <Button variant="text" onClick={() => toggleTheme(!isDark)}>
          <Flex alignItems="center">
            <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
            <Text color="textDisabled" mx="4px">
              /
            </Text>
            <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
          </Flex>
        </Button>
      </Flex>
      <SettingsEntry>
        <Flex>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "30px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "8px" : 0;
            // if (social.items) {
            //   return (
            //     <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
            //       {social.items.map((item) => (
            //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
            //           {item.label}
            //         </Link>
            //       ))}
            //     </Dropdown>
            //   );
            // }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}

          {/* <Button variant="text" onClick={() => toggleTheme(!isDark)}>
            <Flex alignItems="center">
              <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
              <Text color="textDisabled" mx="4px">
                /
              </Text>
              <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
            </Flex>
          </Button> */}
        </Flex>
        {/* <Button variant="text" onClick={() => toggleTheme(!isDark)}>
          <Flex alignItems="center">
            <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
            <Text color="textDisabled" mx="4px">
              /
            </Text>
            <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
          </Flex>
        </Button> */}
        <Dropdown
          position="top-right"
          target={
            <Button
              variant="text"
              style={{ padding: "2px" }}
              startIcon={<LanguageIcon color="textSubtle" width="20px" />}
            >
              <Text style={{ fontSize: "18px" }} color="textSubtle">
                {currentLang?.toUpperCase()}
              </Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown>
      </SettingsEntry>
      <div>
        {/* <Dropdown
          position="top-right"
          target={
            <Button variant="text" style={{padding:"2px"}} startIcon={<LanguageIcon color="textSubtle" width="33px" />}>
              <Text style={{fontSize:"22px"}} color="textSubtle">{currentLang?.toUpperCase()}</Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown> */}
      </div>
    </Container>
  );
};

export default PanelFooter;
