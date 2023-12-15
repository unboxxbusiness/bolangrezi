import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Ravi Kumar",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "This course transformed my communication skills! The dynamic learning and personalized feedback were game-changers. Now, I feel more confident and ready for any professional challenge."
    },
    {
        id: uuid(),
        title: "Sonam.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Flexible scheduling made learning easy for a busy professional like me. The job-focused content and additional career support were practical and immediately applicable. Highly recommended"
    },
    {
        id: uuid(),
        title: "Mohit.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "The recognized certification opened doors for my job search. The lifetime access is a fantastic bonus for ongoing skill refinement. This course is a must for mastering spoken English"
    },
    {
        id: uuid(),
        title: "Rahul.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "An exceptional course! The interactive activities, personalized feedback, and flexible scheduling made learning enjoyable and effective. The job-focused content gave me insights crucial for workplace communication"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
