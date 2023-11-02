import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { AiOutlineClose } from "react-icons/ai";
import "./help.css";

// Define AccordionTrigger component
const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

// Define AccordionContent component
const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

// Define the Help component
function Help( { handlerHelpContainer }) {
  const [isHelpVisible, setHelpVisible] = useState(true);

  const handleCloseClick = () => {
    setHelpVisible(false);
    
  };
  return (
    <div>
      {isHelpVisible && (
        <div className="help-container">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <h1>Help</h1>
            <AiOutlineClose
              style={{ fontSize: "30px" }}
              onClick={()=>{handleCloseClick(), handlerHelpContainer(false)}}
            />
          </div>
          <Accordion.Root
            className="AccordionRoot"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            <Accordion.Item className="AccordionItem" value="item-1">
              <AccordionTrigger>Get support</AccordionTrigger>
              <AccordionContent>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                    Get support
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    To contact support or request a refund, select your
                    preferred language from the table below. We recommend
                    following these troubleshooting steps to self-diagnose and
                    fix your issue.
                  </p>
                </div>
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-2">
              <AccordionTrigger>Verify your YouTube account</AccordionTrigger>
              <AccordionContent>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                    Verify your YouTube account
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    To verify your channel, you'll be asked to enter a phone
                    number. We'll send a verification code by text or voice call
                    to that phone number.
                  </p>
                </div>
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-3">
              <AccordionTrigger>About channels</AccordionTrigger>
              <AccordionContent>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                    About channels
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    Create and target custom groups of related websites or apps{" "}
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Channels are custom groups of related websites or apps
                    (mobile or connected TV).
                  </p>
                </div>
              </AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      )}
    </div>
  );
}

export default Help;
