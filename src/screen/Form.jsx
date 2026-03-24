import React from "react";
import SectionDivider from "../components/SectionDivider";
import Header from "../sections/Header";
import Perfume from "../sections/Perfume";
import Quality from "../sections/Quality";
import Notes from "../sections/Notes";
import Review from "../sections/Review";
import CustomerDetails from "../sections/CustomerDetails";
import Footer from "../sections/Footer";
import Optional from "../sections/Optional";
import SuccessScreen from "../sections/SuccessScreen";
import { useState } from "react";
import { supabase } from "../lib/supabase";

/* TODO:
  fix the link submit new response
*/


import { useForm } from "../context/FormContext";

const Form = () => {
  const { formData, resetForm } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1 — photo upload
      let photoUrl = null;
      if (formData.photo) {
        const { data, error: uploadError } = await supabase.storage
          .from("review-photos")
          .upload(`${Date.now()}-${formData.photo.name}`, formData.photo);

        if (uploadError) throw uploadError;
        photoUrl = data?.path ?? null;
      }

      // Step 2 — insert row
      const { error: insertError } = await supabase.from("reviews").insert([
        {
          perfume_name: formData.selectedPerfume?.name,
          perfume_type: formData.selectedPerfume?.type,
          overall: formData.overallRating,
          sillage: formData.sillage,
          longevity: formData.longevity,
          value: formData.value,
          packaging: formData.packaging,
          note_tags: formData.noteTags,
          recommend: formData.recommend,
          review_text: formData.reviewText,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          photo_url: photoUrl,
          instagram: formData.instagram,
          facebook: formData.facebook,
        },
      ]);

      if (insertError) throw insertError;

      setSuccess(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    resetForm();
    setSuccess(false);
  };

  if (success) {
    return <SuccessScreen onReset={handleReset} />;
  }

  return (
    <form onSubmit={handelSubmit}>
      <Header />
      <Perfume />
      <SectionDivider />
      <Quality />
      <SectionDivider />
      <Notes />
      <SectionDivider />
      <Review />
      <SectionDivider />
      <CustomerDetails />
      <SectionDivider />
      <Optional />
      <Footer loading={loading} />
    </form>
  );
};

export default Form;