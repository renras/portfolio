import styled from "styled-components";

const ImageWrapper = styled.div`
  min-width: 300px;
  max-width: 300px;
  height: 450px;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    overflow: visible;
    height: inherit;
    min-width: inherit;
    right: 10px;
    top: 10px;
    background-color: var(--blue-green);
    visibility: visible;
    z-index: -1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Section = ({ img }: { img: string }) => {
  return (
    <ImageWrapper>
      <Image src={img} />
    </ImageWrapper>
  );
};

export default Section;
