import { CustomList, CustomListItem } from "@/ui/custom-list";
import Link from "next/link";

export function Experiences() {
  return (
    <div className="max-w-xl mx-auto my-4 px-4 home-page-content">
      <CustomList>
        <CustomListItem>
          <p className="font-bold">Currently:</p>
        </CustomListItem>
        <CustomListItem isSubItem>
          Studying Information Technology @{" "}
          <Link href="https://www.cmu.edu" target="_blank">
            Carnegie Mellon University
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Studying Distributed Systems @{" "}
          <Link href="https://www.cmu.edu" target="_blank">
            CMU
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Member @{" "}
          <Link href="https://www.cmu.edu/ai" target="_blank">
            AI Club at CMU
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Making music and covers
        </CustomListItem>

        <div className="my-4" />

        <CustomListItem>
          <p className="font-bold">Previously:</p>
        </CustomListItem>
        <CustomListItem isSubItem>
          Software Developer 2 @{" "}
          <Link href="https://www.adobe.com" target="_blank">
            Adobe
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          President @{" "}
          <Link href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank">
            TEDx
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Microsoft Learn Student Ambassador @{" "}
          <Link href="https://mvp.microsoft.com/studentambassadors" target="_blank">
            Microsoft
          </Link>
        </CustomListItem>
        <CustomListItem isSubItem>
          Patent holder - Government of India
        </CustomListItem>
      </CustomList>
      <div className="my-4" />
    </div>
  );
}
