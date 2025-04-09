import { Service } from "@/type/service";

type ServiceListItemProps = { service: Service };

export default function ServiceListItem({ service }: ServiceListItemProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center flex-shrink-0 border border-primary/30 rounded-full bg-primary/15 size-12">
        {service.icon && <service.icon className="size-6" />}
      </span>
      <div className="flex-1 lg:items-center gap-1 lg:gap-4 flex lg:flex-row flex-col">
        <span>{service.title}</span>
        <hr className="grow hidden lg:block" />
        <div className="text-muted-foreground text-sm lg:text-base">
          from <span className="text-foreground">{service.price}</span> per hour
        </div>
      </div>
    </div>
  );
}
