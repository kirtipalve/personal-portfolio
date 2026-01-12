import { CustomList, CustomListItem } from "@/ui/custom-list";
import Link from "next/link";

export function Activity() {
  return (
    <div className="max-w-xl mx-auto my-4 px-4 home-page-content">
      <CustomList>
        <CustomListItem>
          <p className="font-bold">Currently:</p>
        </CustomListItem>
        <CustomListItem isSubItem>
          Master of Information Systems Management @{" "}
          <Link href="https://www.cmu.edu" target="_blank">
            Carnegie Mellon University
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Building AI systems for video translation and multimodal understanding
        </CustomListItem>
        <CustomListItem isSubItem>
          Exploring cloud computing, distributed systems, and scalable ML infrastructure
        </CustomListItem>

        <div className="my-4" />

        <CustomListItem>
          <p className="font-bold">Recently:</p>
        </CustomListItem>
        <CustomListItem isSubItem>
          Software Development Engineer 2 @{" "}
          <Link href="https://www.adobe.com" target="_blank">
            Adobe
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Shipped accessibility and globalization features to millions of users
        </CustomListItem>
        <CustomListItem isSubItem>
          Microsoft Learn Student Ambassador @{" "}
          <Link href="https://mvp.microsoft.com/studentambassadors" target="_blank">
            Microsoft
          </Link>
        </CustomListItem>

        <div className="my-4" />

        <div className="my-4" />

        <CustomListItem>
          My resume is available{" "}
          <Link href="/resume.pdf" prefetch={false}>
            here
          </Link>
          .
        </CustomListItem>
      </CustomList>
      <div className="my-4" />
    </div>
  );
}
