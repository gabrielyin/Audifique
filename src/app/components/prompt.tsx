'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { PromptSchema, PromptSchemaType } from "@/utils/schemas";
import { useForm } from "react-hook-form"
import { createAudio } from "@/utils/api/service";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Prompt() {
  const router = useRouter()

  const {register, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful} } = useForm<PromptSchemaType>({
    resolver: zodResolver(PromptSchema)
  });

  async function handleCreateAudio(data: PromptSchemaType) {
    const response = await createAudio(data);

    if (response) {
      router.push(`?audioUrl=${response}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateAudio)} className="flex flex-col">
      <textarea {...register('prompt')} name="prompt" rows={10} placeholder="Digite a sua mensagem aqui explicando brevemente um tópico e não se esqueça de dar detalhes..." className="w-full p-3 outline-none border border-black"></textarea>
      <div className="border-b border-l border-r border-black p-3 flex justify-between items-center">
        <div>
          {isSubmitting ? <p>Gerando áudio...</p> : null}
        </div>

        <button aria-disabled={isSubmitting} type="submit" className="bg-black text-white py-2 px-3 font-bold">Audificar</button>
      </div> 
      {errors.prompt && <span className="text-xs my-2 text-red-500">*{errors.prompt.message}</span>} 
    
    </form>
  )
}