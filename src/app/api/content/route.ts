import { getContent, saveContent, setByPath } from "@/lib/content";

export async function PATCH(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return Response.json(
      { error: "Editing is only available in local development." },
      { status: 403 },
    );
  }

  const body = await request.json().catch(() => null);
  if (
    !body ||
    typeof body.path !== "string" ||
    typeof body.value !== "string"
  ) {
    return Response.json({ error: "Expected { path: string, value: string }" }, { status: 400 });
  }

  const content = await getContent();

  try {
    setByPath(content as unknown as Record<string, unknown>, body.path, body.value);
  } catch {
    return Response.json({ error: "Invalid path" }, { status: 400 });
  }

  await saveContent(content);

  return Response.json({ ok: true });
}
