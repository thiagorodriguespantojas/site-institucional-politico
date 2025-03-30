import { Controller, Get } from "@nestjs/common";
import { Registry, Counter } from "prom-client";

const register = new Registry();
const requestCount = new Counter({
  name: "requests_total",
  help: "Total de requisições",
});

@Controller("metrics")
export class MetricsController {
  @Get()
  async getMetrics(): Promise<string> {
    requestCount.inc();
    return register.metrics();
  }
}
