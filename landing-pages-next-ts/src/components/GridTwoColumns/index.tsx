import { Heading } from '../Heading';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';

export type GridTwoColumnsProps = {
  title: string;
  text: string;
  srcImg: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridTwoColumns = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId = '',
}: GridTwoColumnsProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};
