import Styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components';

export const Container = Styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = Styled.TextInput`
 flex: 1;
 color: #fff;
 font-size: 16px;
 font-family: 'RobotoSlab-regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;