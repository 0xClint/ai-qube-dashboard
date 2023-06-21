import { assetcardData } from "@/data/asset-card-data";
import AssetCard from "@/widgets/cards/asset-card";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Asset() {
  return (
    <div className="mt-12 flex flex-col gap-5">
      <div className="flex justify-between">
        <Typography className="my-2 text-2xl font-semibold">
          Create Asset{" "}
        </Typography>
        <Button>Create</Button>
      </div>
      {assetcardData
        ? assetcardData.map(({ title, createdAt, description }) => {
            return (
              <AssetCard
                title={title}
                createdAt={createdAt}
                description={description}
              />
            );
          })
        : ""}
    </div>
  );
}

export default Asset;
