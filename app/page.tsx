import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import StudentVision from "@/components/StudentVision";
import ValuesGrid from "@/components/ValuesGrid";
import TeacherVision from "@/components/TeacherVision";
import ParentVision from "@/components/ParentVision";
import ClassicalEducation from "@/components/ClassicalEducation";
import Programs from "@/components/Programs";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Donations from "@/components/Donations";

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <StudentVision />
      <ValuesGrid />
      <TeacherVision />
      <ParentVision />
      <ClassicalEducation />
      <Programs />
      <Location />
      <FAQ />
      <Donations />
    </>
  );
}
