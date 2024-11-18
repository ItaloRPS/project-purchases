import { Button, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import './styles.scss'

export const Checkout = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <div className="container-checkout">
      <form className="form-checkout" onSubmit={handleSubmit(onSubmit)}>
        <div className="checkout">
            <h4>Forma de Pagamento</h4>
            <div className="payment">
            <Controller
                    name="paymentMethod"
                    control={control}
                    defaultValue="" 
                    rules={{ required: "Escolha um forma de pagamento." }}
                    render={({ field, fieldState }) => (
                    <>
                        <RadioGroup {...field} name="radio-buttons-group">
                        <FormControlLabel
                            value="pix"
                            control={<Radio color="default" />}
                            label="Pix"
                        />
                        <FormControlLabel
                            value="boleto"
                            control={<Radio color="default" />}
                            label="Boleto Bancário"
                        />
                        <FormControlLabel
                            value="cartao"
                            control={<Radio color="default" />}
                            label="Cartão de Crédito"
                        />
                        </RadioGroup>
                        {fieldState.error && (
                        <p style={{ color: "red" }}>{fieldState.error.message}</p>
                        )}
                    </>
                    )}
                />
            </div>
            <h4>Entrega</h4>
            <div className="delivery">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                            {...field}
                            disabled
                            size="small"
                            label="Nome"
                            color="info"
                            sx={{ width: '100%',background:'#e4e4e4'  }}
                            />
                        )}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                            {...field}
                            disabled
                            size="small"
                            label="email"
                            color="info"
                            sx={{ width: '100%',background:'#e4e4e4'  }}
                            />
                        )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                        name="cpf"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                            {...field}
                            disabled
                            size="small"
                            label="cpf"
                            color="info"
                            sx={{ width: '100%',background:'#e4e4e4'  }}
                            />
                        )}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Controller
                        name="address"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                            {...field}
                            disabled
                            size="small"
                            label="endereço"
                            color="info"
                            sx={{ width: '100%',background:'#e4e4e4'  }}
                            />
                        )}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Controller
                        name="number"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                            {...field}
                            disabled
                            size="small"
                            label="Numero"
                            color="info"
                            sx={{ width: '100%',background:'#e4e4e4' }}
                            />
                        )}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller
                        name="complement"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                            {...field}
                            disabled
                            size="small"
                            label="Complemento"
                            color="info"
                            sx={{ width: '100%',background:'#e4e4e4'  }}
                            />
                        )}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Controller
                        name="city"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                            {...field}
                            disabled
                            size="small"
                            label="Cidade"
                            color="info"
                            sx={{ width: '100%',background:'#e4e4e4'  }}
                            />
                        )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                        name="state"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                            {...field}
                            disabled
                            size="small"
                            label="Estado"
                            color="info"
                            sx={{ width: '100%',background:'#e4e4e4'  }}
                            />
                        )}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
            <div className="summary">
                <div className="details">
                    <h2>Resumo:</h2>
                    <p>Forma de Pagamento: <span>PIX/Boleto</span></p>
                    <p>Valor Total: <span>R$ 1.599,96</span></p>
                    <p className="discount">Desconto: <span>-R$ 400,00</span></p>
                </div>
                <div className="installments">
                    <p className="total">à vista no PIX/Boleto: <span>R$ 1.199,96</span></p>
                    <p>Parcelamento no Cartão em até 12x de R$ 121,98</p>
                </div>
                <div className="btn-submit">
                    <Button size='medium' type='submit' variant="contained" className='btn-finish' sx={{background:'black'}}>Finalizar Compra</Button>
                </div>
            </div>
      </form>
    </div>
  );
};
