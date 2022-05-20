// plugins
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// next js
import Router from "next/router";
import Head from "next/head";

// message validation
import { requiredMessage, stringMessage, emailMessage } from "ErrorMessageYUP";

export default function HomePage() {
  // schema validation with yup
  const schemaValidationWithYUP = yup.object({
    fullName: yup.string(stringMessage).required(requiredMessage),
    email: yup
      .string(stringMessage)
      .email(emailMessage)
      .required(requiredMessage),
    comment: yup.string().required(requiredMessage),
  });

  // menghubungkan React Hook Form dengan YUP schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationWithYUP),
  });

  // === handle submit data ===
  const handleSubmitData = (data) => {
    Router.push("/success");
  };
  // === end handle submit data ===

  return (
    <>
      <Head>
        <title>Data Diri</title>
      </Head>

      <div className="container">
        <h3 className="text-title">Tinggalkan Komentar Anda *</h3>

        <hr />

        <form
          className="form-wrapper"
          onSubmit={handleSubmit(handleSubmitData)}
        >
          <label className="wrapper-field-input">
            <span className="text-field">Nama Lengkap*</span>
            <input
              type="text"
              className="input-field"
              placeholder="Contoh Saja"
              {...register("fullName")}
            />
            <span className="error-message">{errors?.fullName?.message}</span>
          </label>

          <label className="wrapper-field-input">
            <span className="text-field">Email*</span>
            <input
              type="email"
              className="input-field"
              placeholder="contoh@gmail.com"
              {...register("email")}
            />
            <span className="error-message">{errors?.email?.message}</span>
          </label>

          <label className="wrapper-field-input">
            <span className="text-field">Komentar*</span>
            <textarea
              className="input-field"
              rows={5}
              placeholder="Komentar anda*"
              {...register("comment")}
            />
            <span className="error-message">{errors?.comment?.message}</span>
          </label>

          <div>
            <button type="submit" className="btn-submit">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
