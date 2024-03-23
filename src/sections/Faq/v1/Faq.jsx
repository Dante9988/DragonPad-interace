import { FaMinus, FaPlus } from "react-icons/fa";
import { SectionTitle } from "components/sectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "components/accordion/Accordion";
import data from "assets/data/faq/dataV1";
import FAQStyleWrapper from "./Faq.style";

const FAQ = () => {
  return (
    <FAQStyleWrapper className="gamfi_faq_sect" id="faq">
      <div className="container">
        <div className="gamfi_faq_content">
          <SectionTitle
            isCenter={true}
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="QUESTIONS & ANSWERS"
            className="text-center faq-title"
          />

          <div className="gamfi_faq_questions">
            <Accordion className="faq_questions">
              {data?.map((item, i) => (
                <AccordionItem key={i}>
                  <AccordionTitle>
                    <h5>{item.title}</h5>
                    <IconWrapper>
                      <OpenIcon>
                        <FaMinus />
                      </OpenIcon>
                      <CloseIcon>
                        <FaPlus />
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle>
                  <AccordionBody>
                    <p>{item.text}</p>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <h5 className="faq_cta_text">
            Don’t get your answer ?
            <a href="/contact"> Ask Here ! </a>
          </h5>
        </div>
      </div>
    </FAQStyleWrapper>
  );
};

export default FAQ;
