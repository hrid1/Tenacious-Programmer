import PriceOption from "../PriceOption/PriceOption";

const gymPlans = [
  {
    id: "gym-plan-basic",
    name: "Basic Plan",
    price: 20,
    features: [
      "Access to gym during off-peak hours",
      "Use of cardio and strength equipment",
      "Free introductory training session",
      "Locker room access",
      "Basic workout plan",
    ],
  },
  {
    id: "gym-plan-standard",
    name: "Standard Plan",
    price: 40,
    features: [
      "24/7 gym access",
      "Access to cardio, strength, and free-weight zones",
      "Group fitness classes (Yoga, Pilates, etc.)",
      "2 free personal training sessions/month",
      "Locker room & sauna access",
      "Monthly progress tracking",
    ],
  },
  {
    id: "gym-plan-premium",
    name: "Premium Plan",
    price: 60,
    features: [
      "24/7 gym access with priority entry",
      "Unlimited access to all fitness classes",
      "4 personal training sessions/month",
      "Customized workout & nutrition plan",
      "Access to premium amenities (spa, massage chairs)",
      "Guest passes (bring a friend 4x/month)",
    ],
  },
];

const PriceOptions = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 mx-auto justify-center mx-4">
      {gymPlans.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
