import styled from 'styled-components';

type InputWrapperProps = {
  children?: React.ReactNode;
  className?: string;
} & iconTrailProps;

type iconTrailProps = { iconTrail?: React.ReactNode };

export const InputWrapper = ({
  className,
  children,
  iconTrail,
}: InputWrapperProps) => (
  <Container className={className}>
    <ChildrenWrapper>
      {children}
      <InputIconTrailing iconTrail={iconTrail} />
    </ChildrenWrapper>
  </Container>
);

const InputIconTrailing: React.FC<iconTrailProps> = (props) => {
  if (!props.iconTrail) return null;
  return <IconTrailContainer>{props.iconTrail}</IconTrailContainer>;
};

const Container = styled.div`
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutralWhite};
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacingInsetSizeXsH};
  height: 100%;
  position: relative;
  width: 100%;
`;

const IconTrailContainer = styled.i`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 24px;
  min-width: 24px;
`;
