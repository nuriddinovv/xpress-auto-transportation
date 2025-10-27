import { CallBackForm } from "../components/call-back-form";

export const Contacts = () => {
  return (
    <div className="container">
      <p className="font-bold text-2xl md:text-[32px] text-center">
        Contact Info
      </p>
      <iframe
        className="py-4"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52293.40366617258!2d-80.867251!3d34.99825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856830079f24413%3A0xbd9eda834cd3098f!2sIndian%20Land%2C%20SC%2029707!5e0!3m2!1sen!2sus!4v1761564350319!5m2!1sen!2sus"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
      <CallBackForm />
    </div>
  );
};
