import * as S from './style';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
