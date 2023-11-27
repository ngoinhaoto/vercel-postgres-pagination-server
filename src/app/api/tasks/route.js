import task from "../../../lib/taskData";

export async function GET(req) {
  // Declare new variables to avoid accidentally mutating the original data
  const data = task;

  // Get the user parameters from the URL
  const pageNumber = parseInt(req.nextUrl.searchParams.get("pageNumber") || 1);
  const itemsPerPage = parseInt(req.nextUrl.searchParams.get("itemsPerPage") || 5);
  console.log(`pageNumber: ${pageNumber}, itemsPerPage: ${itemsPerPage}`);

  // Calculate the start and end index
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  console.log(`startIndex: ${startIndex}, endIndex: ${endIndex}`);
  // Get data for this page
  const pageData = data.slice(startIndex, endIndex);

  // delay 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return Response.json({
    total: data.length,
    items: pageData,
  });
}
