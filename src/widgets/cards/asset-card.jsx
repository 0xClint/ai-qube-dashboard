import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function AssetCard({ title, createdAt, description }) {
  return (
    <Card className="w-full  flex-row">
      <CardBody>
        <div className="flex w-full justify-between">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title ? title : "Fire arm cartridge"}
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined">Edit</Button>
            <Button variant="outlined">Remove</Button>
            <Button variant="filled">Ship</Button>
          </div>
        </div>
        <Typography className="my-2 font-normal">
          <span className="font-semibold"> Created At: </span>
          {createdAt ? createdAt : " 2022-06-11"}
        </Typography>
        <Typography color="gray" className="mb-7 mt-5 font-normal">
          <Typography className="font-semibold">Description:</Typography>
          {description
            ? description
            : "A high-performance rifle cartridge optimized for long-range shooting, renowned for its exceptional accuracy, extended effective range, and superb ballistic capabilities."}
        </Typography>
      </CardBody>
    </Card>
  );
}
