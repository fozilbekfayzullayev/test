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
import { CloudUpload } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation qoidalari
const schema = yup.object().shape({
  first_name: yup.string().required("Введите фамилию"),
  last_name: yup.string().required("Введите имя"),
  middle_name: yup.string().required("Введите отчество"),
  phone: yup
    .string()
    .required("Введите номер телефона")
    .matches(/^[0-9+()\-\s]+$/, "Неверный формат номера"),
  email: yup.string().email("Неверный email").required("Введите ваш email"),
  birthday: yup.string().required("Укажите дату рождения"),
  gender: yup.string().required(),
  republic: yup.string().required("Выберите регион"),
  region: yup.string().required("Введите область"),
  nationality: yup.string().required("Введите национальность"),
  jshr: yup
    .string()
    .required("Введите ПИН-ФЛ")
    .matches(/^\d{14}$/, "Должно быть 14 цифр"),
  seria: yup.string().required("Введите серию паспорта"),
  institution: yup.string().required("Введите учреждение"),
  diploma_seria: yup.string().required("Введите серию диплома"),
  graduation_year: yup
    .number()
    .typeError("Введите год окончания")
    .max(2025, "Год не может быть больше 2025")
    .required("Введите год окончания"),
  speciality: yup.string().required("Введите специальность"),
  language: yup.string().required("Выберите язык обучения"),
  passport: yup.mixed().required("Загрузите паспорт"),
  diploma: yup.mixed().required("Загрузите диплом"),
  photo: yup.mixed().required("Загрузите фото"),
  certificate: yup.mixed().required("Загрузите сертификат"),
});

const theme = createTheme({
  palette: {
    primary: { main: "#374453" },
  },
  components: {
    MuiTextField: { styleOverrides: { root: { width: "100%" } } },
    MuiFormControl: { styleOverrides: { root: { width: "100%" } } },
  },
});

export default function AdmissionForm() {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      gender: "male",
      language: "uzb",
      region: "",
      republic: "",
    },
  });
  const [files, setFiles] = useState({
    passport: null,
    diploma: null,
    photo: null,
    certificate: null,
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log("FormData yuborildi:", Object.fromEntries(formData));
    alert("Форма успешно отправлена ✅");
  };

  const handleFileChange = (e, name) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [name]: file }));
      setValue(name, file);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: { xs: 1, md: 3 } }}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={3}>
            {/* F.I.O. va aloqa */}
            {[
              { label: "Фамилия", name: "first_name" },
              { label: "Имя", name: "last_name" },
              { label: "Отчество", name: "middle_name" },
              { label: "Телефон", name: "phone" },
              { label: "Email", name: "email", type: "email" },
            ].map((f) => (
              <Grid size={{ xs: 12, md: 4 }} key={f.name}>
                <Controller
                  name={f.name}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type={f.type || "text"}
                      label={f.label}
                      variant="standard"
                      error={!!errors[f.name]}
                      helperText={errors[f.name]?.message}
                    />
                  )}
                />
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 3 }} />
          <Grid container spacing={3}>
            {/* Tug‘ilgan sana */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                name="birthday"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    label="Дата рождения"
                    InputLabelProps={{ shrink: true }}
                    variant="standard"
                    error={!!errors.birthday}
                    helperText={errors.birthday?.message}
                  />
                )}
              />
            </Grid>

            {/* Jins */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <FormControl variant="standard" error={!!errors.gender}>
                    <InputLabel>Пол</InputLabel>
                    <Select {...field}>
                      <MenuItem value="male">Мужской</MenuItem>
                      <MenuItem value="female">Женский</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                name="republic"
                control={control}
                render={({ field }) => (
                  <FormControl variant="standard" error={!!errors.republic}>
                    <InputLabel>Регион/Республика</InputLabel>
                    <Select {...field}>
                      <MenuItem value="uzb">Республика Узбекистан</MenuItem>
                      <MenuItem value="qq">Республика Каракалпакистан</MenuItem>
                      <MenuItem value="other">Другое</MenuItem>
                    </Select>
                    {errors.republic && (
                      <Typography color="error" fontSize={12}>
                        {errors.republic.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                name="region"
                control={control}
                render={({ field }) => (
                  <FormControl variant="standard" error={!!errors.region}>
                    <InputLabel>Область</InputLabel>
                    <Select {...field}>
                      <MenuItem value="1">Наманганская область</MenuItem>
                      <MenuItem value="6">Ташкентская область</MenuItem>
                      <MenuItem value="7">Город Ташкент</MenuItem>
                      <MenuItem value="13">Самаркандская область</MenuItem>
                      <MenuItem value="8">Ферганская область</MenuItem>
                      <MenuItem value="10">Кашкадарьинская область</MenuItem>
                    </Select>
                    {errors.republic && (
                      <Typography color="error" fontSize={12}>
                        {errors.republic.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                name="nationality"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Национальность"
                    variant="standard"
                    error={!!errors.nationality}
                    helperText={errors.nationality?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />
          <Grid container spacing={3}>
            {[
              { name: "jshr", label: "ПИН-ФЛ" },
              { name: "seria", label: "Серия паспорта" },
              { name: "institution", label: "Учреждение" },
              { name: "diploma_seria", label: "Серия диплома" },
              {
                name: "graduation_year",
                label: "Год окончания",
                type: "number",
              },
              { name: "speciality", label: "Специальность" },
            ].map((f) => (
              <Grid size={{ xs: 12, md: 2 }} key={f.name}>
                <Controller
                  name={f.name}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type={f.type || "text"}
                      label={f.label}
                      variant="standard"
                      error={!!errors[f.name]}
                      helperText={errors[f.name]?.message}
                    />
                  )}
                />
              </Grid>
            ))}

            {/* Til */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Controller
                name="language"
                control={control}
                render={({ field }) => (
                  <FormControl variant="standard" error={!!errors.language}>
                    <InputLabel>Язык обучения</InputLabel>
                    <Select {...field}>
                      <MenuItem value="uzb">Узбекский</MenuItem>
                      <MenuItem value="rus">Русский</MenuItem>
                      <MenuItem value="eng">Английский</MenuItem>
                    </Select>
                    {errors.language && (
                      <Typography color="error" fontSize={12}>
                        {errors.language.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />
          <Grid container spacing={2}>
            {/* Passport */}
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                endIcon={<CloudUpload />}
              >
                Загрузить паспорт (PDF)
                <input
                  hidden
                  type="file"
                  name="passport"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, "passport")}
                />
              </Button>
              {errors["passport"] && (
                <Typography color="error" fontSize={12}>
                  {errors["passport"]?.message}
                </Typography>
              )}
              <span
                style={{ fontStyle: "italic", fontSize: 12, color: "green" }}
              >
                {files["passport"] && files["passport"].name}
              </span>
            </Grid>
            {/* Diploma */}
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                endIcon={<CloudUpload />}
              >
                Загрузить диплом (PDF)
                <input
                  hidden
                  type="file"
                  name="passport"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, "diploma")}
                />
              </Button>
              {errors["diploma"] && (
                <Typography color="error" fontSize={12}>
                  {errors["diploma"]?.message}
                </Typography>
              )}
              <span
                style={{ fontStyle: "italic", fontSize: 12, color: "green" }}
              >
                {files["diploma"] && files["diploma"].name}
              </span>
            </Grid>
            {/* Photo */}
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                endIcon={<CloudUpload />}
              >
                Загрузить фото (JPG, PNG)
                <input
                  hidden
                  type="file"
                  name="photo"
                  accept=".jpg , .png"
                  onChange={(e) => handleFileChange(e, "photo")}
                />
              </Button>
              {errors["photo"] && (
                <Typography color="error" fontSize={12}>
                  {errors["photo"]?.message}
                </Typography>
              )}
              <span
                style={{ fontStyle: "italic", fontSize: 12, color: "green" }}
              >
                {files["photo"] && files["photo"].name}
              </span>
            </Grid>
            {/* Certificate */}
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                endIcon={<CloudUpload />}
              >
                Загрузить сертификат (PDF)
                <input
                  hidden
                  type="file"
                  name="certificate"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, "certificate")}
                />
              </Button>
              {errors["certificate"] && (
                <Typography color="error" fontSize={12}>
                  {errors["certificate"]?.message}
                </Typography>
              )}
              <span
                style={{ fontStyle: "italic", fontSize: 12, color: "green" }}
              >
                {files["certificate"] && files["certificate"].name}
              </span>
            </Grid>
          </Grid>
          {/* Tugmalar */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 4, flexWrap: "wrap" }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "rgba(15, 82, 186, 1)",
                color: "#fff",
                fontWeight: 600,
                px: 3,
                "&:hover": {
                  background: "#fff",
                  color: "rgba(15, 82, 186, 1)",
                },
              }}
            >
              ОТПРАВИТЬ
            </Button>
            <Button type="reset" variant="outlined" onClick={() => reset()}>
              СБРОСИТЬ
            </Button>
          </Stack>
        </form>
      </Box>
    </ThemeProvider>
  );
}
