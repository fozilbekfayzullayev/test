import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Box,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Divider,
  Stack,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#374453",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          "& .MuiInputBase-input": {
            width: "100%",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
});

export default function AdmissionForm() {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    phone: "",
    phone_additional: "",
    email: "",
    birthday: "",
    gender: "male",
    republic: "",
    region: "",
    nationality: "",
    jshr: "",
    seria: "",
    institution: "",
    diploma_seria: "",
    graduation_year: "",
    speciality: "",
    language: "uzb",
  });

  const [passportFile, setPassportFile] = useState(null);
  const [diplomaFile, setDiplomaFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [certificateFile, setCertificateFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((s) => ({ ...s, [name]: value }));
  };

  const handleFileChange = (e, setter) => {
    const f = e.target.files && e.target.files[0];
    setter(f || null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    if (passportFile) fd.set("passport", passportFile);
    if (diplomaFile) fd.set("diploma", diplomaFile);
    if (photoFile) fd.set("photo", photoFile);
    if (certificateFile) fd.set("certificate", certificateFile);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "transparent" }}>
        <form
          onSubmit={handleSubmit}
          method="post"
          encType="multipart/form-data"
          noValidate
        >
          {/* Личные данные */}
          <Grid container spacing={4}>
            {[
              { label: "Ваша Фамилия", name: "first_name" },
              { label: "Ваше Имя", name: "last_name" },
              { label: "Ваше Отчество", name: "middle_name" },
              { label: "Введите ваш номер Телефона", name: "phone" },
              {
                label: "Дополнительный номер Телефона",
                name: "phone_additional",
              },
              { label: "Введите ваш Email", name: "email", type: "email" },
            ].map((item, idx) => (
              <Grid item size={{ xs: 12, md: 4 }} key={idx}>
                <TextField
                  fullWidth
                  label={item.label}
                  name={item.name}
                  type={item.type || "text"}
                  value={formValues[item.name]}
                  onChange={handleChange}
                  required
                  slotProps={{ input: { maxLength: 60 } }}
                  variant="standard"
                />
              </Grid>
            ))}

            <Grid item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Дата рождения"
                name="birthday"
                type="date"
                value={formValues.birthday}
                onChange={handleChange}
                slotProps={{
                  inputLabel: { shrink: true },
                }}
                required
                variant="standard"
              />
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth>
                <InputLabel id="gender-label">Пол</InputLabel>
                <Select
                  labelId="gender-label"
                  label="Пол"
                  name="gender"
                  value={formValues.gender}
                  onChange={handleChange}
                  variant="standard"
                >
                  <MenuItem value="male">Mужской</MenuItem>
                  <MenuItem value="female">Женский</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Адрес */}
          <Typography variant="h6" sx={{ color: "#374453", mb: 1 }}>
            Ваш Адрес (место жительства)
          </Typography>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Регион/Республика</InputLabel>
                <Select
                  name="republic"
                  value={formValues.republic}
                  onChange={handleChange}
                  required
                  variant="standard"
                >
                  <MenuItem value="1">Республика Узбекистан</MenuItem>
                  <MenuItem value="2">Республика Каракалпакистан</MenuItem>
                  <MenuItem value="3">Другое</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Область</InputLabel>
                <Select
                  name="region"
                  value={formValues.region}
                  onChange={handleChange}
                  required
                  variant="standard"
                >
                  <MenuItem value="1">Наманганская область</MenuItem>
                  <MenuItem value="6">Ташкентская область</MenuItem>
                  <MenuItem value="7">Город Ташкент</MenuItem>
                  <MenuItem value="13">Самаркандская область</MenuItem>
                  <MenuItem value="8">Ферганская область</MenuItem>
                  <MenuItem value="10">Кашкадарьинская область</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField
                label="Ваша Национальность"
                name="nationality"
                value={formValues.nationality}
                onChange={handleChange}
                required
                variant="standard"
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* ПИН-ФЛ */}
          <Typography variant="h6" sx={{ color: "#374453", mb: 1 }}>
            ПИН-ФЛ
          </Typography>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextField
                label="ПИН-ФЛ - 14 цифр"
                name="jshr"
                type="number"
                value={formValues.jshr}
                onChange={handleChange}
                required
                variant="standard"
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextField
                label="Серия паспорта"
                name="seria"
                value={formValues.seria}
                onChange={handleChange}
                required
                variant="standard"
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Button variant="outlined" component="label" fullWidth>
                Загрузить паспорт (PDF)
                <input
                  hidden
                  type="file"
                  name="passport"
                  onChange={(e) => handleFileChange(e, setPassportFile)}
                  accept="application/pdf"
                />
              </Button>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Образование */}
          <Typography variant="h6" sx={{ color: "#374453", mb: 1 }}>
            Информация о предыдущем уровне образования
          </Typography>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 4 }}>
              <FormControl fullWidth>
                <InputLabel>Учреждение</InputLabel>
                <Select
                  name="institution"
                  value={formValues.institution}
                  onChange={handleChange}
                  required
                  variant="standard"
                >
                  <MenuItem value="1">Школа</MenuItem>
                  <MenuItem value="2">Лицей</MenuItem>
                  <MenuItem value="3">Колледж</MenuItem>
                  <MenuItem value="4">Бакалавр</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextField
                label="Серия и номер аттестата/диплома"
                name="diploma_seria"
                value={formValues.diploma_seria}
                onChange={handleChange}
                required
                variant="standard"
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <TextField
                label="Год окончания"
                name="graduation_year"
                type="number"
                value={formValues.graduation_year}
                onChange={handleChange}
                required
                slotProps={{ max: 2025 }}
                variant="standard"
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Button variant="outlined" component="label" fullWidth>
                Загрузить диплом (PDF)
                <input
                  hidden
                  type="file"
                  name="diploma"
                  onChange={(e) => handleFileChange(e, setDiplomaFile)}
                  accept="application/pdf"
                />
              </Button>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Button variant="outlined" component="label" fullWidth>
                Загрузить фото 3x4 (PDF)
                <input
                  hidden
                  type="file"
                  name="photo"
                  onChange={(e) => handleFileChange(e, setPhotoFile)}
                  accept="application/pdf"
                />
              </Button>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Иностранный язык */}
          <Typography variant="h6" sx={{ color: "#374453", mb: 1 }}>
            Иностранный язык
          </Typography>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Специальность</InputLabel>
                <Select
                  name="speciality"
                  value={formValues.speciality}
                  onChange={handleChange}
                  required
                  variant="standard"
                >
                  <MenuItem value="10">Бухгалтерский учет</MenuItem>
                  <MenuItem value="11">
                    Финансы и финансовые технологии
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Язык</InputLabel>
                <Select
                  name="language"
                  value={formValues.language}
                  onChange={handleChange}
                  variant="standard"
                >
                  <MenuItem value="uzb">Узбекский</MenuItem>
                  <MenuItem value="rus">Русский</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant="outlined" component="label" fullWidth>
                Загрузить сертификат
                <input
                  hidden
                  type="file"
                  name="certificate"
                  onChange={(e) => handleFileChange(e, setCertificateFile)}
                  accept="application/pdf"
                />
              </Button>
            </Grid>
          </Grid>

          <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
            <Button
              type="submit"
              variant="contained"
              disableRipple
              disableElevation
              sx={{
                background: "rgba(15, 82, 186, 1)",
                color: "#fff",
                fontWeight: 600,
                border: "1px solid rgba(15, 82, 186, 1)",
                px: 2,
                py: 1,
                transition: "background 0.5 ease",
                "&:hover": {
                  background: "#fff",
                  color: "rgba(15, 82, 186, 1)",
                },
              }}
            >
              ОТПРАВИТЬ
            </Button>
            <Button
              type="reset"
              variant="outlined"
              color="rgba(15, 82, 186, 1)"
              onClick={() => window.location.reload()}
            >
              СБРОСИТЬ
            </Button>
          </Stack>
        </form>
      </Box>
    </ThemeProvider>
  );
}
