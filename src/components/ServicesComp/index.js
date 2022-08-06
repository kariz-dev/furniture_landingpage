import { 
  ServiceWrap, 
  ServiceTitle, 
  ServiceRow, 
  ServiceCol, 
  ServiceSubtitle, 
  ServiceDesc,
  ServiceCard,
  ServiceCardImg,
  ServiceCardTitle,
  ServiceCardDesc
} from "./styled";
import data from "../../data";

function SevicesComp() {
  return (
    <>
      {data.service.map((item, index) => (
        <ServiceWrap key={index}>
          <ServiceTitle>{item.title}</ServiceTitle>
          <ServiceRow>
            <ServiceCol>
              <ServiceSubtitle>{item.subtitle}</ServiceSubtitle>
            </ServiceCol>
            <ServiceCol>
              <ServiceDesc>{item.desc}</ServiceDesc>
            </ServiceCol>
          </ServiceRow>
          <ServiceRow>
            {item.cards.map((item, index) => (
              <ServiceCard key={index}>
                <ServiceCardImg src={item.img} />
                <ServiceCardTitle>{item.title}</ServiceCardTitle>
                <ServiceCardDesc>{item.desc}</ServiceCardDesc>
              </ServiceCard>
            ))}
          </ServiceRow>
        </ServiceWrap>
      ))}
    </>
  );
}

export default SevicesComp;
