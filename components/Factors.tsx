"use client";
import { Form, FormControl, FormField } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { matrixSchema, Matrix } from "@/types/schemas";
import CustomInput from "./CustomInput";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { solveMatrix } from "@/app/action";
import { useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

function Factors() {
  const [solution, setSolution] = useState<number[]>([]);
  const [steps, setSteps] = useState<number[][][]>([]);
  const form = useForm<Matrix>({
    resolver: zodResolver(matrixSchema),
    defaultValues: {
      x1: 0,
      x2: 0,
      x3: 0,
      c1: 0,
      c2: 0,
      c3: 0,
      y1: 0,
      y2: 0,
      y3: 0,
      z1: 0,
      z2: 0,
      z3: 0,
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: [number[], number[], number[]]) =>
      await solveMatrix(data),
    onSuccess: (data) => {
      setSolution(data.solution);
      setSteps(data.steps);
    },
  });
  const handleSubmit = (data: Matrix) => {
    mutate([
      [data.x1, data.y1, data.z1, data.c1],
      [data.x2, data.y2, data.z2, data.c2],
      [data.x3, data.y3, data.z3, data.c3],
    ]);
  };
  const vars = ['x', 'y', 'z =']
  return (
    <div className="mt-24">
      <h2 className="text-2xl font-semibold text-center">
        Enter Factors,{" "}
        <span className="font-bold text-indigo-700">all factors required</span>
      </h2>
      <div className="my-4 flex flex-col items-center gap-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-8 text-xl"
          >
            <div className="flex items-center gap-6">
              <CustomInput controller={form.control} name="x1" />
              <CustomInput controller={form.control} name="y1" />
              <CustomInput controller={form.control} name="z1" />
              <span className="text-2xl">=</span>
              <CustomInput controller={form.control} name="c1" />
            </div>
            <div className="flex items-center gap-6">
              <CustomInput controller={form.control} name="x2" />
              <CustomInput controller={form.control} name="y2" />
              <CustomInput controller={form.control} name="z2" />
              <span className="text-2xl">=</span>
              <CustomInput controller={form.control} name="c2" />
            </div>
            <div className="flex items-center gap-6">
              <CustomInput controller={form.control} name="x3" />
              <CustomInput controller={form.control} name="y3" />
              <CustomInput controller={form.control} name="z3" />
              <span className="text-2xl">=</span>
              <CustomInput controller={form.control} name="c3" />
            </div>
            <Button type="submit" className="bg-indigo-600 text-white hover:text-black transition-colors" disabled={isPending}>
              {isPending ? "Solving..." : "Solve"}
            </Button>
          </form>
        </Form>
      </div>
      {solution.length > 0 && (
        <>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Steps.</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 py-4">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center gap-8 mb-4"
                >
                  <CardContent className="flex flex-col gap-4">
                  <span className="text-2xl font-semibold pt-4">
                    Step {index + 1}
                  </span>
                    {step.map((row, rowIndex) => (
                      <>
                        <div key={rowIndex} className="flex items-center gap-4">
                          {row.map((item, itemIndex) => (
                            <span key={itemIndex}>{item.toFixed(2)} { vars[itemIndex]}</span>
                          ))}
                        </div>
                      </>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold">Solution.</h2>
            <div className="flex items-center gap-8 py-4 justify-between">
              <span>x = {solution[0].toString()}</span>
              <span>y = {solution[1].toString()}</span>
              <span> z = {solution[2].toString()}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Factors;
