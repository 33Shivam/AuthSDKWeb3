import React from "react";
import "./Landing.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { Heading, Text, Button, Code, Card, Avatar } from "@radix-ui/themes";
import UfoModel from "./ufoModel";
import HeroVector from "../Assests/HeroVector.svg";
import Group from "../Assests/Group.svg";
import ReactCurvedText from "react-curved-text";
import AuthLogo from "../Assests/AuthLogo.svg";
import BackgroundVid from "../Assests/bgvid.mp4";

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

function Landing() {
  return (
    <div className="dark-theme">
      <div className="main">
        <video className="videoTag" autoPlay loop muted>
          <source src={BackgroundVid} type="video/mp4" />
        </video>
        <div className="navbar-container">
          <NavigationMenu.Root className="NavigationMenuRoot">
            <div className="logo-wrapper">
              <Avatar src={AuthLogo} fallback="Logo" size="4" />
              <Text>Auth3.0</Text>
            </div>
            <NavigationMenu.List className="NavigationMenuList">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  Learn <CaretDownIcon className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul className="List one">
                    <li style={{ gridRow: "span 3" }}>
                      <NavigationMenu.Link asChild>
                        <a className="Callout" href="/">
                          <svg
                            aria-hidden
                            width="38"
                            height="38"
                            viewBox="0 0 25 25"
                            fill="white"
                          >
                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                            <path d="M12 0H4V8H12V0Z"></path>
                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                          </svg>
                          <div className="CalloutHeading">Zuraverse</div>
                          <p className="CalloutText">
                            The only metaverse you would ever require.
                          </p>
                        </a>
                      </NavigationMenu.Link>
                    </li>

                    <ListItem href="https://stitches.dev/" title="Stitches">
                      CSS-in-JS with best-in-class developer experience.
                    </ListItem>
                    <ListItem href="/colors" title="Colors">
                      Beautiful, thought-out palettes with auto dark mode.
                    </ListItem>
                    <ListItem href="https://icons.radix-ui.com/" title="Icons">
                      A crisp set of 15x15 icons, balanced and consistent.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  Products <CaretDownIcon className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul className="List two">
                    <ListItem
                      title="Introduction"
                      href="/primitives/docs/overview/introduction"
                    >
                      Build high-quality, accessible design systems and web
                      apps.
                    </ListItem>
                    <ListItem
                      title="Getting started"
                      href="/primitives/docs/overview/getting-started"
                    >
                      A quick tutorial to get you up and running with Radix
                      Primitives.
                    </ListItem>
                    <ListItem
                      title="Styling"
                      href="/primitives/docs/guides/styling"
                    >
                      Unstyled and compatible with any styling solution.
                    </ListItem>
                    <ListItem
                      title="Animation"
                      href="/primitives/docs/guides/animation"
                    >
                      Use CSS keyframes or any animation library of your choice.
                    </ListItem>
                    <ListItem
                      title="Accessibility"
                      href="/primitives/docs/overview/accessibility"
                    >
                      Tested in a range of browsers and assistive technologies.
                    </ListItem>
                    <ListItem
                      title="Releases"
                      href="/primitives/docs/overview/releases"
                    >
                      Radix Primitives releases and their changelogs.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  Pricing <CaretDownIcon className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul className="List two">
                    <ListItem
                      title="Introduction"
                      href="/primitives/docs/overview/introduction"
                    >
                      Build high-quality, accessible design systems and web
                      apps.
                    </ListItem>
                    <ListItem
                      title="Getting started"
                      href="/primitives/docs/overview/getting-started"
                    >
                      A quick tutorial to get you up and running with Radix
                      Primitives.
                    </ListItem>
                    <ListItem
                      title="Styling"
                      href="/primitives/docs/guides/styling"
                    >
                      Unstyled and compatible with any styling solution.
                    </ListItem>
                    <ListItem
                      title="Animation"
                      href="/primitives/docs/guides/animation"
                    >
                      Use CSS keyframes or any animation library of your choice.
                    </ListItem>
                    <ListItem
                      title="Accessibility"
                      href="/primitives/docs/overview/accessibility"
                    >
                      Tested in a range of browsers and assistive technologies.
                    </ListItem>
                    <ListItem
                      title="Releases"
                      href="/primitives/docs/overview/releases"
                    >
                      Radix Primitives releases and their changelogs.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>{" "}
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  Community <CaretDownIcon className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul className="List two">
                    <ListItem
                      title="Introduction"
                      href="/primitives/docs/overview/introduction"
                    >
                      Build high-quality, accessible design systems and web
                      apps.
                    </ListItem>
                    <ListItem
                      title="Getting started"
                      href="/primitives/docs/overview/getting-started"
                    >
                      A quick tutorial to get you up and running with Radix
                      Primitives.
                    </ListItem>
                    <ListItem
                      title="Styling"
                      href="/primitives/docs/guides/styling"
                    >
                      Unstyled and compatible with any styling solution.
                    </ListItem>
                    <ListItem
                      title="Animation"
                      href="/primitives/docs/guides/animation"
                    >
                      Use CSS keyframes or any animation library of your choice.
                    </ListItem>
                    <ListItem
                      title="Accessibility"
                      href="/primitives/docs/overview/accessibility"
                    >
                      Tested in a range of browsers and assistive technologies.
                    </ListItem>
                    <ListItem
                      title="Releases"
                      href="/primitives/docs/overview/releases"
                    >
                      Radix Primitives releases and their changelogs.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Indicator className="NavigationMenuIndicator">
                <div className="Arrow" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="ViewportPosition">
              <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
            <Button variant="outline" size="2" radius="full">
              Login / Signup
            </Button>
          </NavigationMenu.Root>
        </div>
        <div className="herosection">
          <div className="leftdiv">
            <div className="herotxt">
              <Heading size="9" align="left">
                Your Extraterrestrial Advantage:{" "}
                <span style={{ color: "var(--iris-11)" }}>
                  Wallet Integration for DApps
                </span>
              </Heading>
              <div className="subText">
                <Text size="3">
                  Unlock the potential of the blockchain and decentralized
                  applications with Web3 wallet abstraction. Say goodbye to
                  complex wallet management and say hello to a user-friendly
                  gateway to the future of the internet.
                </Text>
              </div>
            </div>

            <div className="bottomDiv">
              <div className="start-button">
                <Button
                  color="iris"
                  size="3"
                  radius="large"
                  style={{ paddingLeft: "32px", paddingRight: "32px" }}
                >
                  Get Started
                </Button>
              </div>
              <div className="codeTxt">
                <Code variant="ghost" highContrast>
                  npm install @web3-wallets-kit/core
                </Code>
              </div>
            </div>
          </div>
          <div className="rightdiv">
            <div className="ufo-image-container">
              <img src={Group} alt="Hero Vector" />

              {/* <UfoModel />{" "} */}
            </div>
            <div className="curved-text">
              <ReactCurvedText
                width="600"
                height="600"
                cx="300"
                cy="300"
                rx="250"
                ry="250"
                startOffset="0"
                reversed={true}
                text="Abducting all your web3 problems . Abducting all your web3 problems . Abducting all your web3 problems."
                textProps={{ style: { fontSize: "32" } }}
                textPathProps={{
                  fill: "#5B62FD6B",
                  stroke: "#5B62FD6B",
                  color: "white",
                  opacity: "0.2",
                }}
                tspanProps={{ dy: "0" }}
                svgProps={{ className: "curved-text" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
