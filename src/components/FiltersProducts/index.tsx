'use client'
import { Accordion, AccordionDetails, AccordionSummary, Box, Slider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.scss'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CheckFilter } from '../CheckFilter';
import { formatPrince } from '@/util/formatPrince';
import FilterListIcon from '@mui/icons-material/FilterList';

export const FiltersProducts = () => {
  const [prince,setPrince] = useState(100)
  const router = useRouter();

  const handleCheckboxChange = (event:any) => {
    const value = event.target.value;
    const checked = event.target.checked;
    const name = event.target.name;

    const queryParams = new URLSearchParams(window.location.search);
    if (checked) {
      queryParams.set(name, value);
    }else{
      queryParams.delete(name);
    }
    console.log(queryParams.toString())
    router.replace(`${window.location.pathname}?${queryParams.toString().toString()}`);
  };


  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setPrince(newValue);
    }
  };

  return (
    <aside className="filter-itens">
    <span className='filter-title'><FilterListIcon/><h4>FILTRAR E ORDENAR</h4></span>
    <Accordion>
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        ORDENAR POR
      </AccordionSummary>
      <AccordionDetails>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='maisVendidos' name='ordenar' value='maisVendidos'>Mais vendidos</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='lancametos' name='ordenar' value='lancametos'>Lançamentos</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='menorPreco' name='ordenar' value='menorPreco'>Menor preço</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='maiorPreco' name='ordenar' value='maiorPreco'>Maior preço</CheckFilter>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        TAMANHO
      </AccordionSummary>
      <AccordionDetails>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='tamanhoAll' name='tamanho' value='todos'>Todos</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='tamanhoM' name='tamanho' value='m'>Tamanho M</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='tamanhoG' name='tamanho' value='g'>Tamanho G</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='tamanhoGG' name='tamanho' value='gg'>Tamanho GG</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='tamanhoXG' name='tamanho' value='xg'>Tamanho XG</CheckFilter>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        COR
      </AccordionSummary>
      <AccordionDetails>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='colorAll' name='cor' value='todos'>Todos</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='colorWhite' name='cor' value='branco'>Branco</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='colorBlack' name='cor' value='preto'>Preto</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='colorGray' name='cor' value='cinza'>Cinza</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='colorGreen' name='cor' value='verde'>Verde</CheckFilter>
        <CheckFilter type='radio' onClick={handleCheckboxChange} id='colorRed' name='cor' value='vermelhor'>Vermelho</CheckFilter>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel4-header"
      >
        PREÇO
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ width: 250 }}>
          <Typography id="non-linear-slider" gutterBottom>
            {formatPrince(prince)}
          </Typography>
          <Slider
            value={prince}
            min={50}
            step={1}
            max={800}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            color="success"
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2">
              50,00 min
            </Typography>
            <Typography
              variant="body2">
              800,00 max
            </Typography>
          </Box>

      </Box>
      </AccordionDetails>
    </Accordion>
  </aside>
  );
};
