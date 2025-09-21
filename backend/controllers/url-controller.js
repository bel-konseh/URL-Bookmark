
import supabase from "../config/supabase-config.js";

export const addUrl = async (req, res) => {
    const { url, title } = req.body;

    if(url.trim() === "" || title.trim() === "") {
        return res.status(400).json({ error: "Url and title are required" });
    }
    const { data, error } = await supabase.from("urls").insert({url:url, title:title, owner_id: req.user.id}).select().single();

    if (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    } 

    return res.status(200).json({ data });
}

export const getUrls = async (req, res) => {
    const { data, error } = await supabase.from("urls").select("*").eq("owner_id", req.user.id);
    if (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    } 
    return res.status(200).json({ data });
}

export const deleteUrl = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from("urls").delete().eq("id", id);
    if (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    } 
    return res.status(200).json({ data });
}