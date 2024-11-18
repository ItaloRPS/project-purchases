"use client"
import { Button, Grid, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import './styles.scss'

export const FormUser = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-user">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Dados do Usuario</h2>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Controller
              name="nome"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  size="small"
                  label="Nome"
                  color="info"
                  sx={{ width: '100%',background:'white' }}
                />
              )}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  size="small"
                  type="email"
                  label="Email"
                  color="info"
                  sx={{ width: '100%',background:'white' }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Controller
              name="cpf"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={[
                    /[0-9]/, /[0-9]/, /[0-9]/, '.', 
                    /[0-9]/, /[0-9]/, /[0-9]/, '.', 
                    /[0-9]/, /[0-9]/, /[0-9]/, '-', 
                    /[0-9]/, /[0-9]/
                  ]}
                  render={(ref, props) => (
                    <TextField
                      {...props}
                      inputRef={ref}
                      required
                      size="small"
                      label="CPF"
                      color="info"
                      sx={{ width: '100%',background:'white' }}
                    />
                  )}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Controller
              name="telefone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={[
                    '(',
                    /[1-9]/,
                    /\d/,
                    ')',
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  render={(ref, props) => (
                    <TextField
                      {...props}
                      inputRef={ref}
                      required
                      size="small"
                      label="Telefone"
                      color="info"
                      sx={{ width: '100%',background:'white' }}
                    />
                  )}
                />
              )}
            />
          </Grid>
        </Grid>
        <hr/>     
        <h4>Criar senha</h4>
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  size="small"
                  label="Senha"
                  color="info"
                  sx={{ width: '100%',background:'white' }}
                />
              )}
            />
          </Grid>
        </Grid>
        
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <Controller
              name="repeatPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  size="small"
                  label="Repetir a Senha"
                  color="info"
                  sx={{ width: '100%',background:'white' }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={11}>
           <div className="btn-submit">
              <Button size='medium' type='submit' variant="contained" className='btn-finish' sx={{background:'black'}}>Cadastrar</Button>
           </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
