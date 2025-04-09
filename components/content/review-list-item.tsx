import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Review } from "@/type/review";

export default function ReviewListItem({ review }: { review: Review }) {
  return (
    <>
      <Card className="bg-muted">
        <CardContent className="p-6 space-y-4">
          <p>{review.body}</p>
          <div className="flex items-center space-x-4">
            <Avatar className="size-12">
              <AvatarImage src={review.avatar} />
              <AvatarFallback>PC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">{review.name}</span>
              <span className="text-sm text-muted-foreground">
                {review.company}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
