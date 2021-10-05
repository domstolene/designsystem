import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';
import { List as DDSList, ListItem, ListProps } from '.';
import { Typography } from '../Typography';

export default {
  title: 'design system/List',
  component: DDSList
};

export const Overview = (args: ListProps) => {
  return storyHTMLGridTemplate(
    'List - overview',
    <>
      <DDSList {...args} typographyType="bodySans01">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList typographyType="bodySans01">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} listType="ordered" typographyType="bodySans01">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList listType="ordered" typographyType="bodySans01">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} typographyType="bodySerif01">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList typographyType="bodySerif01">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} listType="ordered" typographyType="bodySerif01">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList listType="ordered" typographyType="bodySerif01">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args}>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} listType="ordered">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} typographyType="bodySerif02">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} listType="ordered" typographyType="bodySerif02">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} typographyType="bodySans03">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} listType="ordered" typographyType="bodySans03">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} typographyType="bodySerif03">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} listType="ordered" typographyType="bodySerif03">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} typographyType="bodySans04">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} listType="ordered" typographyType="bodySans04">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} typographyType="bodySerif04">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>

      <DDSList {...args} listType="ordered" typographyType="bodySerif04">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <DDSList listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <DDSList listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </DDSList>
            </ListItem>
          </DDSList>
        </ListItem>
      </DDSList>
    </>,
    '25px',
    4
  );
};
export const Default = (args: ListProps) => {
  return storyHTMLTemplate(
    'List - default',
    <DDSList {...args}>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </DDSList>
  );
};

export const Nested = (args: ListProps) => {
  return storyHTMLTemplate(
    'List - nested',
    <DDSList {...args}>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>
        Item
        <DDSList {...args}>
          <ListItem>Item</ListItem>
          <ListItem>
            Item
            <DDSList {...args}>
              <ListItem>Item</ListItem>
              <ListItem>Item</ListItem>
            </DDSList>
          </ListItem>
        </DDSList>
      </ListItem>
    </DDSList>
  );
};

export const Example = (args: ListProps) => {
  return storyHTMLTemplate(
    'List - example',
    <>
      <div style={{ maxWidth: '700px' }}>
        <Typography withMargins>
          Første gang du gjør tjeneste som arbeidslivskyndig meddommer, vil
          rettens leder be deg om:
        </Typography>
        <DDSList {...args}>
          <ListItem>å følge nøye med i forhandlingen</ListItem>
          <ListItem>
            merke deg forklaringene som blir gitt og bevisene som blir fremlagt
          </ListItem>
          <ListItem>
            å gi uttrykk for hvordan du vurderer saken etter at bevisene er lagt
            frem
          </ListItem>
          <ListItem>
            å ikke legge vekt på andre forhold enn bevisene som er ført i saken
          </ListItem>
        </DDSList>
        <Typography withMargins>
          Første gang du er i retten må du også avgi en forsikring. Den sier at
          du både i den aktuelle saken og i fremtidige saker vil gi vel akt på
          alt som fremkommer gjennom forhandlingene i retten, og at du vil dømme
          slik du finner sannest å rettest å være etter loven og sakens
          bevisligheter. På oppfordring fra dommeren, skal du til dette svare:
          «Det forsikrer jeg.»
        </Typography>
      </div>
    </>
  );
};
