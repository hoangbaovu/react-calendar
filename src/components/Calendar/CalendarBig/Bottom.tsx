import React from 'react';
import styled from 'styled-components';

type Props = {
  weekday: string,
  weekOfYear: number,
  dayOfYear: number,
}

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.palette.black};
  margin-top: auto;
  padding-bottom: 10px;
`;

const Nav = styled.div`
  background: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.white};
  text-align: center;
  display: flex;
  width: 100%;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 0;

  & div {
    flex-grow: 1;
  }
`;

const NavCenter = styled.div`
  font-size: 22px;
`;

const Luna = styled.div`
  display: flex;
  padding-top: 10px;

  & div {
    flex-grow: 1;
  }
`;

const LunaLeft = styled.div`
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  padding-top: 4px;
`;

const LunaLeftTop = styled.div`
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 468px) {
    display: flex;
    flex-direction: column;
  }
`;

const LunaLeftBottom = styled.div`
  
  & p {
    margin: 0;
  }
`;

const LunaMiddle = styled.div`
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
`;

const LunaRight = styled.div`
  text-align: center;
  width: 125px;
  padding-top: 4px;
  text-transform: uppercase;
  
  & p {
    margin: 0;
  }
`;

const LunaMonth = styled.p`
  font-size: 20px;
  margin: 0;
`;
const LunaDate = styled.p`
  font-size: 64px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 468px) {
    font-size: calc(64px / 1.5);
  }
`;
const LunaYear = styled.p`
  font-size: 16px;
  margin: 0;
`;

const LunaSolarTerm = styled.div`
  margin-bottom: 20px;
`;

const LunaZodiacHours = styled.div`

`;

const LunaZodiacHoursTitle = styled.p`
  font-size: 13px;
`

const LunaZodiacHoursContent = styled.p`
  font-size: 12px;
  text-transform: none;
`;

const CalendarBigBottom = ({ weekday, weekOfYear, dayOfYear }: Props) => {
  return (
    <Bottom>
      <Nav>
        <div></div>
        <NavCenter>{ weekday }</NavCenter>
        <div></div>
      </Nav>
      <Luna>
        <LunaLeft>
          <LunaLeftTop>
            <span style={{ marginRight: '10px' }}>Tuần: { weekOfYear }</span>
            <span>Ngày: { dayOfYear }</span>
          </LunaLeftTop>
          <LunaLeftBottom>
            <p>Ngày Giáp Ngọ</p>
            <p>Tháng Bính Tý</p>
            <p>Giờ Giáp Tý</p>
          </LunaLeftBottom>
        </LunaLeft>
        <LunaMiddle>
          <LunaMonth>Tháng 11</LunaMonth>
          <LunaDate>19</LunaDate>
          <LunaYear>Kỷ Hợi</LunaYear>
        </LunaMiddle>
        <LunaRight>
          <LunaSolarTerm>
            <p>Tiết khí</p>
            <p>Đông chí</p>
          </LunaSolarTerm>
          <LunaZodiacHours>
            <LunaZodiacHoursTitle>Giờ Hoàng Đạo</LunaZodiacHoursTitle>
            <LunaZodiacHoursContent>Tý, Sữu, Mão, Ngọ, Thân Dậu</LunaZodiacHoursContent>
          </LunaZodiacHours>
        </LunaRight>
      </Luna>
    </Bottom>
  )
}

export default CalendarBigBottom;