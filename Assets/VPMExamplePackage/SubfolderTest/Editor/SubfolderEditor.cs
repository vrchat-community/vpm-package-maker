using UnityEngine;

public class SubfolderEditor : MonoBehaviour
{
    // Ensuring that a reference to UnityEditor works from this folder
    void Start()
    {
       Debug.Log(UnityEditor.BuildOptions.BuildScriptsOnly);
    }
}
