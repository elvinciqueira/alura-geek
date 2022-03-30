import { Box } from '../Box';

type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => <Box>{children}</Box>;
