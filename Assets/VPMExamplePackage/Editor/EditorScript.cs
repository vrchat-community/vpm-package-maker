using UnityEngine;

public class EditorScript : MonoBehaviour
{
    // Ensuring that a reference to UnityEditor works from this folder
    void Start()
    {
        Debug.Log(UnityEditor.BuildOptions.BuildScriptsOnly);
    }
}
