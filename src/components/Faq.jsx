import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img from '../images/faq.jpg'
import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation();

  return (
    <section className='Faq'>
      <div className="container">
        <div className="row">
          <div className="faq-img col-md-6">
            <img src={img} alt="" />
          </div>
            
          <div className="faq-acardion col-md-6">
            <h2>{t("faqTittle")}</h2>

         

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>{t('faqTittle1')}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                  {t("faqTittle1info")}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>{t("faqTittle2")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                {t("faqTittle2info")}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>{t('faqTittle3')}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                  {t('faqTittle3info')}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='faq-acardion__acardion mb-2'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='acardion-icon'/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='acardion-tittle'>{t("faqTittle4")}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='acardion-info'>
                  {t("faqTittle4info")}
                </Typography>
              </AccordionDetails>
            </Accordion>

           
          </div>
        </div>

        
      </div>
    </section>
  )
}
