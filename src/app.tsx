import {
  Body,
  Button,
  Checkbox,
  Container,
  Headline,
  Logo,
  Pulse,
  Status,
  Textfield,
  Theme,
  Track,
  Transportchip,
  Triptime,
} from "@db-design/react";
import {
  ActionDone,
  CommunicationMail,
  NavigationArrowForward,
} from "@db-design/react-icons";
import "react";

export function App() {
  return (
    <Theme theme="DB_LIGHT_ALTERNATE">
      <Container
        filled
        width="full"
        verticalPadding={{ mobile: "m", desktop: "xl" }}
      >
        <Theme theme="DB_LIGHT">
          <Container
            filled
            width={{ mobile: "full", desktop: "content" }}
            horizontalPadding="m"
            paddingTop="xl"
            paddingBottom="m"
          >
            <Logo size={{ mobile: "m", desktop: "xxl" }} logoUnitsBottom="1" />
            <Pulse logoUnitsTop="0.5">
              <h1>
                <Headline>Hello world!</Headline>
              </h1>
            </Pulse>
            <h3>
              <Headline size="m">Hello world!</Headline>
            </h3>
            <p>
              <Body size="m">Hello world!</Body>
            </p>
            <p>
              <Button icon={<ActionDone />}>Klick mich!</Button>
              <Button
                variant="secondary"
                icon={<NavigationArrowForward />}
                iconPosition="after"
              >
                Klick mich!
              </Button>
            </p>
            <p>
              <Track track="1 A - F" />
              <Transportchip name="U1" zipCode="60000" />
              <Transportchip name="U12" zipCode="10000" showProductLogo />
              <Transportchip name="S4" zipCode="60000" showProductLogo />
              <Body size="m">
                <Triptime dateTime="16:08" predictedDateTime="16:14" />
              </Body>
            </p>

            <Theme theme="DB_DARK">
              <Container
                filled
                width="content"
                paddingBottom="m"
                horizontalPadding="m"
                marginTop="xl"
              >
                <h3>
                  <Headline size="m">
                    Extra-Code (nicht in dem Talk gezeigt)
                  </Headline>
                </h3>
                <div>
                  <Textfield
                    inlineLabel="E-Mail-Adresse"
                    prefix={<CommunicationMail />}
                    suffix="@deutschebahn.com"
                    placeholder="vorname.nachname"
                  />
                  <Container marginTop="xs">
                    <Status>
                      Bei React sind Textfelder nicht editierbar bis eine
                      State-Implementierung erfolgt
                    </Status>
                  </Container>
                </div>
                <Container marginTop="m">
                  <Checkbox footer={<a href="#">AGB anzeigen</a>}>
                    <b>AGB</b> sind toll
                  </Checkbox>
                </Container>
              </Container>
            </Theme>
          </Container>
        </Theme>
      </Container>
    </Theme>
  );
}
